pipeline {
    agent any 
    stages {
        stage('Update Source Code') { 
            steps {
                sh: 'cd /opt/dicky/kong-service/'
                sh: 'git pull'
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
