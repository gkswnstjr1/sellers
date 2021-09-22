pipeline {

  environment {
    registry = "uni-shpark/sellers"
    dockerImage = ""
  }

  agent any

  stages {

    stage('Checkout Source') {
      steps {
        git 'https://github.com/uni-shpark/sellers.git'
      }
    }

    stage('Build image') {
      steps{
        script {
          dockerImage = dockerImage = docker.build("suhyung007/sellers:tomcat-$BUILD_NUMBER")
        }
      }
    }

    stage('Push Image') {
      environment {
               registryCredential = 'dockerhub'
           }
      steps{
        script {
          docker.withRegistry( "https://registry.hub.docker.com", registryCredential ) {
            dockerImage.push()
          }
        }
      }
    }

    stage('Deploy App') {
      steps {
        script {
          kubernetesDeploy(configs: "Deployment.yaml", kubeconfigId: "mykubeconfig")
        }
      }
    }

  }

}