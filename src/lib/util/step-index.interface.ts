/**
 * An index of a wizard step.
 * This index is the index of the step inside the wizard.
 * The index is always zero based, i.e. the step with index 0 is the first step of the wizard
 *
 * @author Marc Arndt
 */
import {StepOffset} from "./step-offset.interface";
import {StepId} from "./step-id.interface";
import {WizardStep} from "./wizard-step.interface";

export interface StepIndex {
  /**
   * The index of the destination step
   */
  stepIndex: number;
}

/**
 * Checks whether the given `value` implements the interface [[StepIndex]].
 *
 * @param value The value to be checked
 * @returns True if the given value implements [[StepIndex]] and false otherwise
 */
export function isStepIndex(value: WizardStep | StepId | StepIndex | StepOffset): value is StepIndex {
  return Object.prototype.hasOwnProperty.call(value, 'stepIndex');
}
