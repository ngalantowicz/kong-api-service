pipeline {
    agent any 
    stages {
        stage('Deploy') { 
            steps {
                build job: '../dicky-deploy-service'
            }
        }
        stage('Configure') { 
            steps {
                 build job: '../dicky-configure-kong'
            }
        }
    }
}
