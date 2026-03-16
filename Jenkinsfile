tools {
    nodejs "NodeJS-18"
}

environment {
    DOCKER_IMAGE = "gopins/devops-node-app"
    VM_IP = "35.188.219.161"
    VM_USER = "gopins172"
}

stages {

    stage('Checkout Code') {
        steps {
            git 'https://github.com/gopisankar-id17/Devops.git'
        }
    }

    stage('Install Dependencies') {
        steps {
            bat 'npm install'
        }
    }

    stage('Run Tests') {
        steps {
            bat 'npm test'
        }
    }

    stage('Build Docker Image') {
        steps {
            bat 'docker build -t %DOCKER_IMAGE% .'
        }
    }

    stage('Push Image to DockerHub') {
        steps {
            bat 'docker push %DOCKER_IMAGE%'
        }
    }

    stage('Deploy') {
        steps {
            bat "ssh %VM_USER%@%VM_IP% docker pull %DOCKER_IMAGE%"
        }
    }
}