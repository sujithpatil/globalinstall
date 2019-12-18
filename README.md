# globalinstall
A script to install the packages globally 

1) Copy and paste the following file as 'script.js' in the root dir of the project (parallel to package.json) 
2) In the package.json , create 'globalDependencies' object which holds package name and package version
  eg : 'globalDependencies' : {
          'my-package' : 'x.y.z'
        }
3) Under scripts section add 'postinstall' with the value of 'node script.js'
