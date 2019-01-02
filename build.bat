

echo "service build..."
go build -o ./bin/service.exe ./src/service/
echo "html build..."
yarn build