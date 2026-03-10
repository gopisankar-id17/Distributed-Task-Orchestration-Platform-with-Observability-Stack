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

        stage('Run Application') {
            steps {
                bat 'node test.js'
            }
        }
    }
}