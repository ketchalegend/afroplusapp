import {Component} from '@angular/core';
import {Service} from '../services/Service';
import {GlobalFields} from '../GlobalFields';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'page-profile',
  templateUrl: 'customPage.html',
  styleUrls: ['customPage.scss']
})
export class NewsPage {

  html = '';

  isAUrl = false;

  secureUrl;

  //To check if something changed
  wasLoggedIn;
  isLoggedIn;

  GlobalFields = GlobalFields;


  constructor(private service: Service, private sanitizer: DomSanitizer) {

    this.loadUrl();

  }


  ionViewDidEnter() {
    this.service.setWhiteBlackBackgroundStatusBar();

    //To be called only when something changed (eg user logged out)
    this.isLoggedIn = (GlobalFields.profile!=undefined && GlobalFields.profile.cookie!=undefined);
    console.log(this.wasLoggedIn)
    console.log(this.isLoggedIn)
    if (this.wasLoggedIn != this.isLoggedIn) {
      console.log("Call it again")
      console.log(this.GlobalFields.site_details.newsPageUrl)
      let url = this.GlobalFields.site_details.newsPageUrl;
      this.secureUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://news.afroplus.de/')
      console.log(this.secureUrl)


    }
  }

  //It store the url to be called by the iframe
  loadUrl() {
    this.isAUrl = this.isURL('https://news.afroplus.de/');
    if (!this.isAUrl)
      this.getHtml();
    else {
      let url = 'https://news.afroplus.de/';

      if (this.isLoggedIn) {
        this.wasLoggedIn = true;
        url = url + '?cla_cookie=' + GlobalFields.profile.cookie;
      }else {
        this.wasLoggedIn = false;
        url = url + '?cla_cookie=' + 'logout';
      }

      if (!url.includes('https')) {
        url.replace('http', 'https');
      }

      this.secureUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url)
    }
  }


  getHtml() {
    this.service.getHtmlFromCustomPageUrl(this.GlobalFields.site_details.newsPageUrl).subscribe((data: any) => {
      data = JSON.parse(data);
      if (data && data.content)
        this.html = data.content.rendered;
    });
  }


  isURL(str) {
    let pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
  }


}
