import os
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense, Dropout
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.callbacks import EarlyStopping, ModelCheckpoint
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt
import cv2
from glob import glob

class BrainTumorDetector:
    def __init__(self, data_path=None, img_size=(128, 128), batch_size=32):
        self.data_path = data_path
        self.img_size = img_size
        self.batch_size = batch_size
        self.model = None
        
    def load_data(self, split_ratio=0.2):
        """
        Load and preprocess the brain MRI dataset.
        Expects a directory structure with 'yes' and 'no' subdirectories
        (yes: contains tumor, no: no tumor)
        """
        if not self.data_path:
            raise ValueError("Data path not specified")
            
        print("Loading data...")
        
        # Lists to store images and labels
        images = []
        labels = []
        
        # Load tumor images (class 1)
        tumor_paths = glob(os.path.join(self.data_path, 'yes', '*'))
        for img_path in tumor_paths:
            img = cv2.imread(img_path)
            img = cv2.resize(img, self.img_size)
            img = img / 255.0  # Normalize
            images.append(img)
            labels.append(1)
            
        # Load non-tumor images (class 0)
        non_tumor_paths = glob(os.path.join(self.data_path, 'no', '*'))
        for img_path in non_tumor_paths:
            img = cv2.imread(img_path)
            img = cv2.resize(img, self.img_size)
            img = img / 255.0  # Normalize
            images.append(img)
            labels.append(0)
            
        # Convert to numpy arrays
        X = np.array(images)
        y = np.array(labels)
        
        # Split data into training and testing sets
        X_train, X_test, y_train, y_test = train_test_split(
            X, y, test_size=split_ratio, random_state=42)
            
        print(f"Dataset loaded: {len(X_train)} training and {len(X_test)} testing samples")
        
        return X_train, X_test, y_train, y_test
    
    def build_model(self):
        """
        Build a CNN model for brain tumor detection
        """
        print("Building model...")
        
        model = Sequential([
            # First convolutional block
            Conv2D(32, (3, 3), activation='relu', input_shape=(*self.img_size, 3)),
            MaxPooling2D((2, 2)),
            
            # Second convolutional block
            Conv2D(64, (3, 3), activation='relu'),
            MaxPooling2D((2, 2)),
            
            # Third convolutional block
            Conv2D(128, (3, 3), activation='relu'),
            MaxPooling2D((2, 2)),
            
            # Fourth convolutional block
            Conv2D(128, (3, 3), activation='relu'),
            MaxPooling2D((2, 2)),
            
            # Flatten and dense layers
            Flatten(),
            Dense(512, activation='relu'),
            Dropout(0.5),  # Add dropout to prevent overfitting
            Dense(1, activation='sigmoid')  # Binary classification
        ])
        
        # Compile the model
        model.compile(
            optimizer='adam',
            loss='binary_crossentropy',
            metrics=['accuracy', tf.keras.metrics.AUC()]
        )
        
        model.summary()
        self.model = model
        return model
    
    def train(self, X_train, y_train, X_val, y_val, epochs=20):
        """
        Train the model with data augmentation
        """
        if self.model is None:
            self.build_model()
        
        print("Training model...")
        
        # Data augmentation for training
        datagen = ImageDataGenerator(
            rotation_range=20,
            width_shift_range=0.1,
            height_shift_range=0.1,
            zoom_range=0.1,
            horizontal_flip=True,
            fill_mode='nearest'
        )
        
        # Callbacks
        early_stopping = EarlyStopping(
            monitor='val_loss',
            patience=5,
            restore_best_weights=True
        )
        
        model_checkpoint = ModelCheckpoint(
            'brain_tumor_model_best.h5',
            monitor='val_accuracy',
            save_best_only=True
        )
        
        # Train the model
        history = self.model.fit(
            datagen.flow(X_train, y_train, batch_size=self.batch_size),
            steps_per_epoch=len(X_train) // self.batch_size,
            epochs=epochs,
            validation_data=(X_val, y_val),
            callbacks=[early_stopping, model_checkpoint]
        )
        
        return history
    
    def evaluate(self, X_test, y_test):
        """
        Evaluate the model on test data
        """
        if self.model is None:
            raise ValueError("Model not trained yet")
            
        print("Evaluating model...")
        
        # Evaluate the model
        loss, accuracy, auc = self.model.evaluate(X_test, y_test)
        print(f"Test Loss: {loss:.4f}")
        print(f"Test Accuracy: {accuracy:.4f}")
        print(f"Test AUC: {auc:.4f}")
        
        return loss, accuracy, auc
    
    def predict(self, image_path):
        """
        Predict whether a single MRI scan contains a tumor
        """
        if self.model is None:
            raise ValueError("Model not trained yet")
            
        # Load and preprocess the image
        img = cv2.imread(image_path)
        img = cv2.resize(img, self.img_size)
        img = img / 255.0  # Normalize
        img = np.expand_dims(img, axis=0)  # Add batch dimension
        
        # Predict
        prediction = self.model.predict(img)[0][0]
        
        # Classification threshold is typically 0.5
        result = "Tumor detected" if prediction >= 0.5 else "No tumor detected"
        confidence = prediction if prediction >= 0.5 else 1 - prediction
        
        print(f"Result: {result}")
        print(f"Confidence: {confidence:.2%}")
        
        return prediction, result
    
    def visualize_results(self, history):
        """
        Visualize training history
        """
        # Plot accuracy
        plt.figure(figsize=(12, 5))
        
        plt.subplot(1, 2, 1)
        plt.plot(history.history['accuracy'])
        plt.plot(history.history['val_accuracy'])
        plt.title('Model Accuracy')
        plt.ylabel('Accuracy')
        plt.xlabel('Epoch')
        plt.legend(['Train', 'Validation'], loc='lower right')
        
        # Plot loss
        plt.subplot(1, 2, 2)
        plt.plot(history.history['loss'])
        plt.plot(history.history['val_loss'])
        plt.title('Model Loss')
        plt.ylabel('Loss')
        plt.xlabel('Epoch')
        plt.legend(['Train', 'Validation'], loc='upper right')
        
        plt.tight_layout()
        plt.savefig('training_history.png')
        plt.show()
    
    def save_model(self, filepath='brain_tumor_model.h5'):
        """
        Save the trained model
        """
        if self.model is None:
            raise ValueError("No model to save")
            
        self.model.save(filepath)
        print(f"Model saved to {filepath}")
    
    def load_model(self, filepath):
        """
        Load a trained model
        """
        self.model = tf.keras.models.load_model(filepath)
        print(f"Model loaded from {filepath}")
        return self.model


# Example usage
if __name__ == "__main__":
    # Path to your dataset
    # Expected structure:
    # data_path/
    #   yes/  (tumor images)
    #   no/   (non-tumor images)
    data_path = "brain_tumor_dataset"
    
    # Initialize the detector
    detector = BrainTumorDetector(data_path=data_path, img_size=(150, 150))
    
    # Load the data
    X_train, X_test, y_train, y_test = detector.load_data(split_ratio=0.2)
    
    # Further split training data to create a validation set
    X_train, X_val, y_train, y_val = train_test_split(
        X_train, y_train, test_size=0.2, random_state=42)
    
    # Build and train the model
    detector.build_model()
    history = detector.train(X_train, y_train, X_val, y_val, epochs=25)
    
    # Evaluate the model
    detector.evaluate(X_test, y_test)
    
    # Visualize training history
    detector.visualize_results(history)
    
    # Save the model
    detector.save_model('brain_tumor_model_final.h5')
    
    # Example of prediction on a single image
    # test_image_path = "path_to_test_image.jpg"
    # detector.predict(test_image_path)