import sys
from PyQt6.QtWidgets import QApplication, QWidget, QLabel, QVBoxLayout
from PyQt6.QtCore import Qt

# Every PyQt app needs one QApplication instance
app = QApplication(sys.argv)

# Create the main window
window = QWidget()
window.setWindowTitle("CAN COMMUNICATOR")

# Set an initial size, but allow resizing
window.resize(500, 300)

# Add a label (centered)
label = QLabel("Greatest CAN application in the world")
label.setAlignment(Qt.AlignmentFlag.AlignCenter)  # Keep it centered even when resized
label.setWordWrap(True)  # Wrap text if the window becomes narrow

# Create a layout that expands with the window
layout = QVBoxLayout()
layout.addStretch()       # Add flexible space above
layout.addWidget(label)
layout.addStretch()       # Add flexible space below

window.setLayout(layout)

# Show the window
window.show()

# Start the event loop
sys.exit(app.exec())
