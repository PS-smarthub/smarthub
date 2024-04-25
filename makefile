tag = 0
version = 0.1

build.cold-start:
	@printf "\033[0;32m>>> building cold-start from Dockerfile\033[0m\n"
	docker build -t cold-start . -f apps/cold-start/Dockerfile
	docker run -d -p 3000:3000 cold-start

build.sot:
	@printf "\033[0;32m>>> building sot from Dockerfile\033[0m\n"
	docker build -t sot . -f apps/sot/Dockerfile
	docker run -d -p 3000:3000 sot