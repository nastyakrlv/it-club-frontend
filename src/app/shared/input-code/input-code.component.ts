import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TuiInputComponent } from '@taiga-ui/kit';
import { IFormData } from '../../types/form-data.interface';

@Component({
	selector: 'app-input-code',
	templateUrl: './input-code.component.html',
	styleUrls: ['./input-code.component.scss'],
})
export class InputCodeComponent implements OnInit {
	@ViewChildren(TuiInputComponent) digitInputs!: QueryList<TuiInputComponent>;

	@Input() quantity: number;
	@Output() userSubmit: EventEmitter<string>;

	public inputCodeForm: FormGroup;
	public digits: number[];

	constructor() {
		this.digits = [];
		this.inputCodeForm = new FormGroup({});
		this.userSubmit = new EventEmitter<string>();
		this.quantity = 6;
	}

	public ngOnInit(): void {
		this.digits = Array(this.quantity)
			.fill(0)
			.map((x: number, i: number) => i + 1);
		this.digits.forEach((digit) => {
			// eslint-disable-next-line @typescript-eslint/unbound-method
			this.inputCodeForm.addControl(`digit${digit}`, new FormControl('', [Validators.required]));
		});
	}

	public onDigitInputChange(currentInput: number): void {
		if (this.digitInputs.get(currentInput)?.value.length) {
			const emptyInput: TuiInputComponent | undefined = this.digitInputs?.find((input) => input?.value === '');
			emptyInput?.nativeFocusableElement?.focus();
		}
	}

	public onKeyPress(event: KeyboardEvent): boolean {
		return event.keyCode >= 48 && event.keyCode <= 57;
	}

	public onKeyDown(event: KeyboardEvent, previousInput: number, currentInput: number): void {
		if (event.key === 'Backspace' && !this.digitInputs.get(currentInput)?.value) {
			this.digitInputs.get(previousInput)?.nativeFocusableElement?.focus();
		}
	}

	public onFocus(currentInput: number): void {
		if (!this.digitInputs.get(currentInput)?.value) {
			const emptyInput: TuiInputComponent | undefined = this.digitInputs?.find(
				(input: TuiInputComponent) => input?.value === ''
			);
			emptyInput?.nativeFocusableElement?.focus();
		}
	}

	public onFormSubmit(): void {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const formData: IFormData = this.inputCodeForm.value;
		let code = '';
		this.digits.forEach((digit: number) => {
			code += formData[`digit${digit}`];
		});
		this.userSubmit.emit(code);
	}
}
