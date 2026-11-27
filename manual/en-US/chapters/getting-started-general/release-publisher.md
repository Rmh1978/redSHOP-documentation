## Release Publisher

Release Publisher is an internal release-management tool, separate from a shop's [Product Files](chapters/product-management/products-redshop.md#productTypes) and customer downloads. It is not required for ordinary shop operation.

On an explicitly provisioned publisher host, an authorized administrator can open **Tools → Release Publisher**. The server-side publisher gate and the appropriate redSHOP permission are both required; administrator permission alone does not provision the host. Publication requires the relevant publication permission. Publisher settings and storage migration controls additionally require component administrator permission.

### Release list

The list shows product, version, channel, a shortened SHA-256, file size, publication state and release date. Search by product name, product number or version, and filter by published state. The model defaults to release date descending unless a saved list selection applies. Select rows before using **Publish** or **Unpublish**; these actions change the availability of existing release records. Do not publish or unpublish without the release owner's approval.

### Publisher settings

The settings form contains:

| Setting | Purpose |
|---|---|
| **Private release storage path** | Absolute private server path for release artifacts. |
| **Maximum private release upload (MB)** | Release ZIP request limit, default 512 MB; permitted range 1–4096 MB. |
| **Private Marketplace storage path** | Absolute private server path for Marketplace publication storage. |
| **Release document storage path** | Absolute private server path for update and changelog XML documents. |
| **Maximum release document upload (KB)** | XML request limit, default 1024 KB; permitted range 1–16384 KB. |

Keep storage outside the public webroot and coordinate changes with the server administrator. An empty path uses the applicable storage fallback; existing legacy data can affect which root is selected. Saving a path is not a file migration. Back up files and configuration and use the migration workflow below instead of simply switching paths for an existing store.

### Private storage migration

Migration applies to the selected release, Marketplace or product-software-download store; Filecheck is excluded. A separately configured document path is not itself a selectable migration role. Check its location and make a separate backup and plan.

1. On an isolated copy, prepare a backup and choose a distinct absolute private destination. In **Private storage migration**, select the store and use **Preview without changes**. Review file and reference counts, bytes, warnings and blockers. The page displays at most the first 200 files.
2. Resolve blockers and arrange a maintenance window before any real change. Applying or restoring requires `REDSHOP_STORAGE_MAINTENANCE=1` in the server environment and explicit confirmation. The flag does **not** pause storefront writes, upload or publication jobs, or scheduled writers: the operator must pause them.
3. With authorization, apply a fresh preview. The operation copies and verifies files before activating the selected path and retains the source. Save the recovery receipt privately. A preview expires after 15 minutes if not yet applied, and changes to the source, references or configuration require another preview.
4. Inspect the active configuration and any cache or journal warnings before resuming writers. Retain both copies until the responsible administrator has verified downloads and recovery.

Rollback uses the recovery receipt and also requires maintenance and confirmation. It checks current references against the original store, so it can be refused if newer files are missing there. Do not delete either copy to force a retry. If migration reports an error, retain both roots and inspect the active configuration before proceeding.

These are source-based instructions; test the complete workflow and recovery on the specific Joomla installation before relying on it. Core and Marketplace release preparation and publication have separate review and approval gates.
