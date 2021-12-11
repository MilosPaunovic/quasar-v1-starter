<script>
import { QBtn } from 'quasar';

export default {
  extends: QBtn,
  props: {
    outline: { type: Boolean, default: true },
    color: { type: String, default: 'primary' },
  },
};
</script>
