---
status: draft
created: 2023-08-07
---

:date{:date=created}


# Nuxt Server-side State Management

## UseState and Plugins

plugin/state.server.ts
composables/states.ts

import {useUser} from 'states'

useUser().value = event.context.something

```vue
const user = toValue(useUser()) //no need for reactivity, will never change
```
