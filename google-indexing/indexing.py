import requests
import json
import google.auth
from google.oauth2 import service_account
from google.auth.transport.requests import Request

# Ruta al archivo JSON de credenciales
SERVICE_ACCOUNT_FILE = "indexing-key.json"  # Asegúrate de que el archivo existe

# Autenticación con Google
SCOPES = ["https://www.googleapis.com/auth/indexing"]
credentials = service_account.Credentials.from_service_account_file(
    SERVICE_ACCOUNT_FILE, scopes=SCOPES
)

# 🔹 Generar un token válido
auth_request = Request()
credentials.refresh(auth_request)

# URL de la API de Indexación
ENDPOINT = "https://indexing.googleapis.com/v3/urlNotifications:publish"

# URL que quieres indexar (cámbiala por la de tu sitio)
URL_TO_INDEX = "https://podoclinicec.com/"

# Datos a enviar a Google
payload = {
    "url": URL_TO_INDEX,
    "type": "URL_UPDATED"
}

# Encabezados de la solicitud con un token válido
headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + credentials.token
}

# Enviar la solicitud a Google
response = requests.post(ENDPOINT, data=json.dumps(payload), headers=headers)

print(response.json())  # Ver la respuesta de Google