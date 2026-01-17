#!/bin/bash
set -e

# Configuration
SUBSCRIPTION_ID="02009ae0-123c-4a10-b711-bfeacfe92bf3" # Updated Subscription
RESOURCE_GROUP="rg-mai-intelligence-001"
LOCATION="eastus"
StartTimer=$(date +%s)
ACR_NAME="acrmaisuperintel${StartTimer}" # Needs to be unique
CONTAINER_APP_ENV="env-mai-intelligence-001"
CONTAINER_APP_NAME="ca-mai-intelligence"
IMAGE_TAG="latest"

echo "Using Subscription: $SUBSCRIPTION_ID"
echo "Creating deployment in $LOCATION..."

# 1. Set Subscription
echo "Setting active subscription..."
az account set --subscription "$SUBSCRIPTION_ID"

# 2. Create Resource Group
echo "Creating Resource Group: $RESOURCE_GROUP"
az group create --name "$RESOURCE_GROUP" --location "$LOCATION"

# 3. Create Azure Container Registry
echo "Creating ACR: $ACR_NAME"
az acr create --resource-group "$RESOURCE_GROUP" --name "$ACR_NAME" --sku Basic --admin-enabled true

# 4. Build and Push Image using ACR Tasks (No local Docker needed)
echo "Building and Pushing image to ACR..."
az acr build --registry "$ACR_NAME" --image "mai-website:$IMAGE_TAG" .

# 5. Create Container App Environment
echo "Creating Container App Environment: $CONTAINER_APP_ENV"
az containerapp env create \
  --name "$CONTAINER_APP_ENV" \
  --resource-group "$RESOURCE_GROUP" \
  --location "$LOCATION"

# 6. Create Container App
echo "Creating Container App: $CONTAINER_APP_NAME"
az containerapp create \
  --name "$CONTAINER_APP_NAME" \
  --resource-group "$RESOURCE_GROUP" \
  --environment "$CONTAINER_APP_ENV" \
  --image "$ACR_NAME.azurecr.io/mai-website:$IMAGE_TAG" \
  --target-port 3000 \
  --ingress 'external' \
  --registry-server "$ACR_NAME.azurecr.io" \
  --query properties.configuration.ingress.fqdn

echo "Deployment completed successfully!"
