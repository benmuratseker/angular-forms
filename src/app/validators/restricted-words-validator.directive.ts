import { Directive, Input } from "@angular/core";
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
    @Input('restrictedWords') restrictedWords: string[] = []; // to check which word is restricted

    validate(control: AbstractControl): null |  ValidationErrors {
        if (!control.value) return null;

        // return control.value.includes('foo')
        //     ? { restrictedWords: true}
        //     : null;

        const invalidWords =  this.restrictedWords
            .map(w => control.value.includes(w) ? w : null)
            .filter(w => w !== null);
            
        return invalidWords.length > 0
            // ? { restrictedWords: true }
            ? { restrictedWords: invalidWords.join(',') }
            : null;
    }
}