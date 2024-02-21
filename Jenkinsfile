pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        git(branch: 'main', url: 'https://github.com/sester2/FeatureFlag.git')
      }
    }

    stage('Label New Commits') {
      steps {
        git(url: 'https://github.com/sester2/FeatureFlag.git', branch: 'main')
      }
    }

  }
}