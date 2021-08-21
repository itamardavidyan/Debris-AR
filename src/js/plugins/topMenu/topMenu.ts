import $ from 'jquery';
import { keepTrackApi } from '@app/js/api/externalApi';
export const init = (): void => {
  // Add HTML
  keepTrackApi.register({
    method: 'uiManagerInit',
    cbName: 'topMenu',
    cb: async () => {
      // Bottom Icon
      (<any>$('#main-container')).append(keepTrackApi.html`
        <div id="help-screen" class="valign-wrapper">
          <div id="help-inner-container" class="valign">
            <p>
              <span id="help-header" class="logo-font">TITLE</span>
              <span id="help-close">X</span>
            </p>
            <span id="help-text">ADVICE</span>
          </div>
        </div>
      `);

      await import('@app/js/uiManager/ui-advice').then((mod) => {
        mod.init();
        keepTrackApi.programs.uiManager.menuController();
      });
    },
  });
};
