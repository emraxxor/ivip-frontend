import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {en_US, NZ_I18N} from 'ng-zorro-antd/i18n';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../../../common-frontend-library/src/common-library/material/material.module';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {MenuComponent} from './component/menu/menu.component';
import {IconDefinition} from '@ant-design/icons-angular';
import {MenuUnfoldOutline} from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [ MenuUnfoldOutline ];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    NzMenuModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzIconModule,
    NzIconModule.forRoot(icons),
  ],
  providers: [
    {
      provide: NZ_I18N,
      useValue: en_US
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
