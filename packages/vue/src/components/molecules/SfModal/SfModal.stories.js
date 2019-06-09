// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfModal from "./SfModal.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";

// use this to document scss vars
const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [["$component-size", "1.438rem", "size of checkmark"]]
};

// use this to document events
const eventsTableConfig = {
  tableHeadConfig: ["NAME", "DESCRIPTION"],
  tableBodyConfig: [["input", "event emited when option is selected"]]
};

storiesOf("Molecules|Modal", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      data() {
        return {
          isModalOpen: true
        };
      },
      components: { SfModal, SfButton },
      props: {
        cross: {
          default: boolean("cross (prop)", true)
        },
        customClass: {
          default: select(
            "CSS Modifier",
            ["null", "sf-sfmodal--modifier"],
            "null"
          )
        }
      },
      template: `
      <div>
      <SfButton @click="isModalOpen = true">Open modal</SfButton>
      <transition name="fade">
      <SfModal
        :visible="isModalOpen"
        @close="isModalOpen = false"
        :cross="cross"
        :class="customClass"
      >Hello World!</SfModal>
      </transition>
      </div>`
    }),
    {
      info: {
        summary: `<p>Component for modal.</p>
       <h2>Usage</h2>
       <pre><code>import SfModal from "@storefrontui/vue/dist/SfModal.vue"</code></pre>
       ${generateStorybookTable(scssTableConfig, "SCSS variables")}
       ${generateStorybookTable(eventsTableConfig, "Events")}
       `
      }
    }
  );