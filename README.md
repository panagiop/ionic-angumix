# ionic-angumix
A Mixcloud API wrapper built in with Ionic, Cordova and AngularJS.<br>
<h4>Live demo</h4>
http://intergalacdev.net63.net/ionic-angumix/www/

<h4>.apk</h4>
http://intergalacdev.net63.net/ionic-angumix/CordovaApp-debug.apk

<h4>Installation Steps</h4>

1) Install Java JDK:<br>
	<i>sudo apt-get install default-jdk</i>

2) Install NodeJS:<br>
	<i>sudo apt-get install npm</i>

3) Install ANT:<br>
	<i>sudo apt-get install ant</i>

4) Download the Android SDK from http://developer.android.com/sdk/index.html, and unpack it somewhere (preferably at your home folder, to avoid permissions issues)

5) Update your ~/.bashrc file to include  the android sdk path:<br>
	<i>#AndroidDev PATH<br>
	export ANDROID_HOME=/home/YOUR_USER_NAME/android-sdk<br>
	export PATH=${PATH}:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools<br></i>
   
6) Install Apache Cordova:<br>
	<i>sudo npm install -g cordova</i>

7) Install Ionic:<br>
	<i>sudo npm install -g ionic</i>

8) Create the project:<br>
	<i>ionic start todo blank</i>

9) Configure ionic to enable the android platform by giving the command:<br>
	<i>ionic platform add android</i>

10)	Install Cordova Network Information Plugin using the Cordova CLI:<br>
	<i>cordova plugin add org.apache.cordova.network-information</i>
	
11) Override the created <i>www</i> folder with that of the repo
