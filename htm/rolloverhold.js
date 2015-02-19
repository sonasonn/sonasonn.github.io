// Version 1.1

var bildro = "_r";
var bildho = "_s";
var bild_n = new Array();
var bild_r = new Array();
var bild_s = new Array();
var bildnr = 0;

var v5  = (navigator.appVersion.indexOf("5.") != -1);

function Rollover( text, src_r, src_s )
{
	var src1="";
	var src2="";
	ausdruck = /src="(.*)(\.\S*)"/;
	if( ausdruck.exec( text ) ){
		src1 = RegExp.$1;
		src2 = RegExp.$2;
	}

	var width="";
	ausdruck = /width="(\d+)"/;
	if( ausdruck.exec( text ) )
		width = RegExp.$1;

	var height="";
	ausdruck = /height="(\d+)"/;
	if( ausdruck.exec( text ) )
		height = RegExp.$1;

	var href="";
	ausdruck = /href="(\S*)"/;
	if( ausdruck.exec( text ) )
		href = RegExp.$1;

	var target="";
	ausdruck = /target="(\S*)"/;
	if( ausdruck.exec( text ) )
		target = RegExp.$1;

	var border="";
	ausdruck = /border="(\d+)"/;
	if( ausdruck.exec( text ) )
		border = RegExp.$1;

	var alt="";
	ausdruck = /alt="(\S*)"/;
	if( ausdruck.exec( text ) )
		alt = RegExp.$1;

	var vspace="";
	ausdruck = /vspace="(\S*)"/;
	if( ausdruck.exec( text ) )
		vspace = RegExp.$1;

	var hspace="";
	ausdruck = /hspace="(\S*)"/;
	if( ausdruck.exec( text ) )
		hspace = RegExp.$1;

	var linktext="";
	ausdruck = />([^>]*)<\/a>/;
	if( ausdruck.exec( text ) )
		linktext = RegExp.$1;

	if( !src_r )
		src_r = src1+bildro+src2;
	if( !src_s )
		src_s = src1+bildho+src2;
	bildnr++;
	bild_n[bildnr] = new Image();
	bild_n[bildnr].src = src1+src2;
	bild_r[bildnr] = new Image();
	bild_r[bildnr].src = src_r;
	bild_s[bildnr] = new Image();
	bild_s[bildnr].src = src_s;

	document.write( '<a href="'+href+'" target="'+target+'" onmouseover="MM_findObj(\'Bild'+bildnr+'\').src=bild_r['+bildnr+'].src;status=\''+alt+'\'; return true;" onmouseout="MM_findObj(\'Bild'+bildnr+'\').src=bild_n['+bildnr+'].src;status=\'\'; return true;" onclick="if( document.all || v5 )this.blur()"><img src="'+src1+src2+'" alt="'+alt+'" border="'+border+'" name="Bild'+bildnr+'" height="'+height+'" width="'+width+'" vspace="'+vspace+'" hspace="'+hspace+'">'+linktext+'</a>' );
}

parent.ROLLOVERHOLD = self;
var bild_ho_src;
var bild_ho_no;
function RolloverHold( nr )
{
	if( bild_ho_src ){
		MM_findObj("Bild"+bild_ho_no).src = bild_ho_src;
		bild_n[bild_ho_no].src = bild_ho_src;
	}
	if( nr > 0 ){
		bild_ho_no = nr;
		bild_ho_src = bild_n[nr].src;
		MM_findObj("Bild"+nr).src = bild_s[nr].src;
		bild_n[nr].src = bild_s[nr].src;
	}
}

function MM_findObj(n, d) { //v4.0
	var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
		d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
	if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
	for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
	if(!x && document.getElementById) x=document.getElementById(n); return x;
}

