import sys
from PyQt6.QtWidgets import (
    QApplication, QMainWindow, QWidget,
    QLabel, QPushButton, QVBoxLayout
)
from PyQt6.QtCore import Qt

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self._init_ui()

    def _init_ui(self):
        self.setWindowTitle("PyQt6 Basic Application")
        self.setGeometry(100, 100, 400, 300)  # x, y, width, height

        # Create central widget and set layout
        central_widget = QWidget()
        self.setCentralWidget(central_widget)

        # Widgets
        self.label = QLabel("Hello, PyQt6!", self)
        self.label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        self.button = QPushButton("Click me", self)
        self.button.clicked.connect(self.on_button_clicked)

        # Layout
        layout = QVBoxLayout()
        layout.addWidget(self.label)
        layout.addWidget(self.button)
        central_widget.setLayout(layout)

    def on_button_clicked(self):
        self.label.setText("Button clicked!")

def main():
    app = QApplication(sys.argv)
    window = MainWindow()
    window.show()
    sys.exit(app.exec())

if __name__ == "__main__":
    main()
