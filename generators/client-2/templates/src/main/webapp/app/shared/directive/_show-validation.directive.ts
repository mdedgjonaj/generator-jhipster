import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({ selector: 'form[show-validation]' })
export class ShowValidationDirective {
    constructor(el: ElementRef, renderer: Renderer) {
       $(el.nativeElement).find('.form-group').each(() => {
           let $formGroup = $(this);
           //TODO the selector needs to be updated
           let $inputs = $formGroup.find('input[ng-model],textarea[ng-model],select[ng-model]');

           if ($inputs.length > 0) {
               $inputs.each(() => {
                   let $input = $(this);
                   //TODO this logic needs to be checked and fixed accordingly
                   let isInvalid = $input.hasClass('ng-invalid') && $input.hasClass('ng-dirty');
                   $formGroup.toggleClass('has-error', isInvalid);
                   /*scope.$watch(function() {
                       return $input.hasClass('ng-invalid') && $input.hasClass('ng-dirty');
                   }, function(isInvalid) {
                       $formGroup.toggleClass('has-error', isInvalid);
                   });*/
               });
           }
       });
    }
}
