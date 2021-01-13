up:
	docker-compose up -d
down:
	docker-compose down -v
destroy:
	docker-compose down -v --rmi all
sh:
	docker-compose exec app sh
dev:
	docker-compose exec app yarn dev