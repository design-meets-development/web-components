import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'ds-button',
  styleUrl: 'ds-button.css',
  shadow: true
})
export class DsButton {
  @Prop() content: string;
  @Prop() classes: string;
  @Prop() state: string;
  render() {
    return (
      <Host class={this.classes}>{this.content}</Host>
    );
  }

}
