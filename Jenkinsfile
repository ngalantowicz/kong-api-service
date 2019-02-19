pipeline {
    agent any 
    stages {
        stage('Update Source Code') { 
            steps {
                build job: 'dicky-update-code'
            }
        }
        stage('Deploy') { 
            steps {
                build job: 'dicky-deploy-service'
            }
        }
        stage('Configure') { 
            steps {
                 build job: 'dicky-configure-kong'
            }
        }
    }
}
