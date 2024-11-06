import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: '[restrictedWords]',
    standalone: true,
    providers: [{
        provide: NG_VALIDATORS,
        multi: true,
        useExisting: RestrictedWordsValidator,
    }],
})

export class RestrictedWordsValidator implements Validator {
    validate(control: AbstractControl): null |  ValidationErrors {
        if (!control.value) return null;

        return control.value.includes('foo')
            ? { restrictedWords: true}
            : null;
    }
}