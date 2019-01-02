
echo "html build..."
yarn build

echo "service build..."
go build -o ./bin/service.exe ./src/service/main.go 