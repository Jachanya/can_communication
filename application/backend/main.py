from flask import Flask, request, jsonify
import can

def list_pcan_devices():
    # Attempt to detect available configurations/interfaces
    configs = can.detect_available_configs(interfaces='pcan')
    print("Detected PCAN configurations:", configs)
    can_devices = []
    # Optionally: If you want their device IDs and channels
    for cfg in configs:
        device = {
            "Interface:": cfg.get("interface"),
              "Channel:": cfg.get("channel"),
              "Device ID:": cfg.get("device_id")
        }
        can_devices.append(device)
        
    return can_devices

app = Flask(__name__)

# A simple GET endpoint
@app.route('/can_devices', methods=['GET'])
def hello():
    return jsonify(list_pcan_devices())

# A POST endpoint that accepts JSON
@app.route('/echo', methods=['POST'])
def echo():
    data = request.get_json()
    return jsonify({ "you_sent": data })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
