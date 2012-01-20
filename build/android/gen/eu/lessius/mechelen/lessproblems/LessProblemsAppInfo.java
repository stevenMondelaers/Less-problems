package eu.lessius.mechelen.lessproblems;

import org.appcelerator.titanium.ITiAppInfo;
import org.appcelerator.titanium.TiApplication;
import org.appcelerator.titanium.TiProperties;
import org.appcelerator.titanium.util.Log;

/* GENERATED CODE
 * Warning - this class was generated from your application's tiapp.xml
 * Any changes you make here will be overwritten
 */
public final class LessProblemsAppInfo implements ITiAppInfo
{
	private static final String LCAT = "AppInfo";
	
	public LessProblemsAppInfo(TiApplication app) {
		TiProperties properties = app.getSystemProperties();
					
					properties.setString("ti.deploytype", "development");
	}
	
	public String getId() {
		return "eu.lessius.mechelen.lessproblems";
	}
	
	public String getName() {
		return "Less problems";
	}
	
	public String getVersion() {
		return "1.0";
	}
	
	public String getPublisher() {
		return "Steven - Niels";
	}
	
	public String getUrl() {
		return "http://";
	}
	
	public String getCopyright() {
		return "2011 by Steven - Niels";
	}
	
	public String getDescription() {
		return "not specified";
	}
	
	public String getIcon() {
		return "appicon.png";
	}
	
	public boolean isAnalyticsEnabled() {
		return true;
	}
	
	public String getGUID() {
		return "cbb3c28e-54e5-4d21-a661-f0329ccaf91d";
	}
	
	public boolean isFullscreen() {
		return false;
	}
	
	public boolean isNavBarHidden() {
		return false;
	}
}
