/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GizmoService } from './gizmo.service';

describe('Service: Gizmo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GizmoService]
    });
  });

  it('should ...', inject([GizmoService], (service: GizmoService) => {
    expect(service).toBeTruthy();
  }));
});
