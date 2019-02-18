pipeline {
    agent any 
    stages {
        stage('Deploy') { 
            build job: '../dicky-deploy-service'
        }
        stage('Configure') { 
            build job: '../dicky-configure-kong'
        }
    }
}
