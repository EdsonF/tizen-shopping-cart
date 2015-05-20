//Include gulp components
var gulp = require('gulp');
var gutil = require('gulp-util');
//A deep deletion module for node (like rm -rf)
var remove = require('rimraf');
//Run a series of dependent gulp tasks in order
var sequence = require('run-sequence');

//Include child process to call shell commands
var exec = require('child_process').exec;

//Paths
var src_path = './src'
var build_path = './build'
var clean_path = './build/*'

//External script names
var build_script = 'build';
var package_script = 'package';
var install_script = 'emu-install';
var uninstall_script = 'emu-uninstall';

//Clean
function clean_task(){remove(clean_path, function(error){});};
gulp.task('clean', clean_task);

//Build
function build_task(){exec(build_script, callback);};
gulp.task('build', ['clean'], build_task);

//Package
function package_task(){exec(package_script, callback);};
gulp.task('package', ['build'], package_task);

//Emulator Install
function emu_install_task(){exec(install_script, callback);};
gulp.task('emu-install', emu_install_task);

//Emulator Uninstall
function emu_uninstall_task(){exec(uninstall_script, callback);};
gulp.task('emu-uninstall', emu_uninstall_task);

//Emulator Refresh
//Uses 'run-sequence'
function refresh_task(callback){sequence('emu-uninstall', 'emu-install')};
gulp.task('emu-refresh', refresh_task);

//Default
gulp.task('default', ['package']);

//Callback function for script output
function callback(error, stdout, stderr){
		if (stdout !== null && stdout !== ''){
			gutil.log('stdout: ', stdout);
		}
		if (stderr !== null && stderr !== ''){
			gutil.log('stderr: ', stderr);
		}
		if (error !== null && error !== ''){
			gutil.log('error: ', error);
		}
	};



