# webtraining-seed

Initial project for Genesis Application to support [web developer training](https://docs.genesis.global/secure/getting-started/web-training/training-intro/). If you want to see the complete application built during the training use this [repo](https://github.com/genesiscommunitysuccess/webtraining-alpha) as a reference.

# Building and Running
From the command line, cd into the root directory of the project and then follow these steps.

## Build
```shell
./gradlew assemble
```

## Run
Make sure Docker is running on your machine and run:
```shell
docker-compose build
docker-compose up -d
```

Now log into the `gsf` container:
```shell
docker exec -it gsf bash
```

Check if all services are running:
```shell
mon
```

Feel free to keep running `mon` until all services are RUNNING.

# Start the training 

Go to the web developer training and follow the [agenda](https://docs.genesis.global/secure/getting-started/web-training/training-intro/#programme). There are 4 sessions or days; each session covers specific resources of the platform to extend the application that you built in the initial [Developer Training](https://docs.genesis.global/secure/getting-started/developer-training/training-intro/).

# License

This is free and unencumbered software released into the public domain.

For full terms, see [LICENSE](./LICENSE)

**NOTE** This project uses licensed components listed in the next section, thus licenses for those components are required during development.

## Licensed components
Genesis low-code platform
