import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CommonModule} from '@angular/common';

import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {RouterTestingModule} from '@angular/router/testing';

import {PluginManagerModule} from '../../../../plugin-manager/plugin-manager.module';

import {SharedModule} from '../../../../themes/shared/shared.module';

import {Router} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {ListViewComponent} from './list-view.component';
import {SvgIconComponent} from '../svg-icon/svg-icon.component';
import {ModalViewComponent} from '../modal-view/modal-view.component';

let mockRouter: any;

class MockRouter {
    navigate = jasmine.createSpy('navigate');
}

export const testImports = [
    CommonModule,
    RouterTestingModule,
    HttpClientModule,
    SharedModule,
    PluginManagerModule.forChild(ListViewComponent),
];

describe('ListViewComponent', () => {
    let component: ListViewComponent;
    let fixture: ComponentFixture<ListViewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [],
            imports: testImports,
            providers: [{provide: Router, useValue: mockRouter}],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should default to ascending', () => {
        expect(component.desc).toBe('ASC');
    });

    it('should toggle to descending', () => {
        component.order('city');
        component.order('city');
        expect(component.desc).toBe('DESC');
    });
});
