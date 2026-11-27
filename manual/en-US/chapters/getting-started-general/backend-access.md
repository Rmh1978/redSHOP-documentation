## Backend access management

The redSHOP sidebar's **Configuration → Backend Access Management** screen presents group-based rules for the redSHOP backend actions declared by the component. It is separate from the adjacent Joomla component access configuration. Joomla user groups and redSHOP shopper groups serve different purposes; assigning a shopper group does not replace administrator permissions.

Before changing permissions, take a verified backup and record the current settings. Work on an isolated copy with disposable administrator accounts, including a separate recovery administrator.

1. Open **Backend Access Management** and select the Joomla group to inspect.
2. Review the available actions and inherited or calculated settings. Change only the permissions needed for the group's work; a visible action in the form is not proof that every associated workflow enforces it.
3. Use **Apply**, then reopen the screen and verify the saved and effective permissions.
4. With separate test accounts, check allowed and denied list, edit and direct-request paths for the relevant workflows. Test component-level permissions separately. Do not rely solely on hidden menu entries.

The available actions depend on the installed version. Some sections in the current access definition are disabled, so do not assume every redSHOP feature has a separately configurable backend action. Actual Joomla 5/6 behavior and enforcement across features require testing.
