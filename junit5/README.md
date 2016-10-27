# JUnit 5 Demo

Demo application for Prairie.Code() 2016 in Des Moines. This is designed
to be a simple demo of basic JUnit 5 concepts.

# Slides

Just looking for the slides? Clone the repo and open `junit5-slides/index.html` in your browser. Use arrow keys for navigation.

# Instructions

1. Clone repo
2. `gradle clean build` downloads dependencies, builds code, and runs the tests
3. `gradle clean junitPlatformTest junitPlatformJacocoReport` generates HTML test report @ `build/test-results/junit-platform/html/index.html`, then generates JaCoCo code coverage report @ `build/jacocoHtml/index.html`

# Licensing
This code is provided under the terms of the MIT license: basically you're free to do whatever you want with it, but no guarantees are made to its validity, stability, or safety. All works referenced by or utilized by this project are the property of their respective copyright holders and retain licensing that may be more restrictive.