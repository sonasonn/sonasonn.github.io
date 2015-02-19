// Version: 1.51
function OpenWindow( href, name, width, height, parameter, xpos, ypos )
{
	var ie  = (navigator.appVersion.indexOf("MSIE") != -1);
	var mac = (navigator.platform.indexOf("Mac") != -1);
	var v5  = !(navigator.appVersion.indexOf("4.") != -1) || (navigator.appVersion.indexOf("MSIE 5.") != -1);
	var w2  = (navigator.userAgent.indexOf("Windows NT 5.0") != -1);
	var v501= (navigator.appVersion.indexOf("5.01") != -1);
	var w98  = (navigator.userAgent.indexOf("98") != -1);
	var aol = (navigator.appVersion.indexOf("AOL") != -1);

	//alert( ie+" "+mac+" "+v5+" "+w2+" "+v501+" "+w98+" "+aol+" "+document.all+" "+document.layers );
	
	eval( "fenster = window.Fenster_"+name );

	if( !(mac && ie && !v5) && fenster && !fenster.closed ){
		if( href )
			fenster.location.href = href;
		fenster.focus();
		return;
	}

	if( parameter != "" )
		parameter = "," + parameter;

	if( !xpos )
		xpos = (screen.availWidth-(width+10))/2;
	if( !ypos )
		ypos = (screen.availHeight-(height+30))/2;

	if( ie ){
		if( mac && !v5 )
			height+=2;
		if( !mac && !aol ){
			width += 10;
			height+= 29;
			if( v501 && w98 )
				height-=2;
		}
	}

	fenster = open( "", name, "height="+height+",width="+width+",toolbar=no,directories=0,copyhistory=0,location=no,status=no,scrollbars=no,resizable=no,screenX="+xpos+",screenY="+ypos+parameter);

	if( !(ie && mac && !v5) && !aol )
		fenster.moveTo( xpos, ypos );

	if( (ie && !mac) )
		fenster.resizeTo( width, height );
	if( !ie ){
		fenster.innerWidth = width;
		fenster.innerHeight = height;
	}

	fenster.focus();
	fenster.location.href = href;

	if( href.indexOf(":")==-1 ){
		fenster.WindowWidth = width;
		fenster.WindowHeight = height;
	}
	eval( "window.Fenster_"+name+" = fenster" );
}
