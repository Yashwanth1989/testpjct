module.exports=function(grunt){

grunt.initConfig({
   sass:{

   	dist:{
      files:{

      	'css/custom.css' : 'sass/custom.scss'
      }
       
   	}
   }

});

 grunt.loadNpmTasks('grunt-contrib-sass');

};