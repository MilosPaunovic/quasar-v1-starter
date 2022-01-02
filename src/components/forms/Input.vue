<script>
import { QInput } from 'quasar';

export default {
  extends: QInput,
  props: {
    lazyRules: { type: Boolean, default: true },
    color: { type: String, default: 'primary' },
    outlined: { type: Boolean, default: true },
    noErrorIcon: { type: Boolean, default: true },
  },
};
</script>
