pipeline {
    agent any

    tools {
        nodejs "NodeJS-18"
    }

    stages {

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
                bat 'docker build -t devops-node-app .'
            }
        }

        stage('Run Docker Container') {
            steps {
                bat 'docker run -d -p 3000:3000 devops-node-app'
            }
        }

    }
}