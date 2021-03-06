/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export { BaseResource, CloudError };

/**
 * Base resource object.
 */
export interface Resource extends BaseResource {
  /**
   * ID of the resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * Name of the resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * Type of Resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
  /**
   * The entity tag used for optimistic concurrency when modifying the resource.
   */
  etag?: string;
}

/**
 * Base resource object.
 */
export interface TrackedResource extends BaseResource {
  /**
   * ID of the resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * Name of the resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * Type of Resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
  /**
   * Custom tags for the resource.
   */
  tags?: { [propertyName: string]: string };
  /**
   * The entity tag used for optimistic concurrency when modifying the resource.
   */
  etag?: string;
}

/**
 * Contains the localized display information for this particular operation or action.
 */
export interface Display {
  /**
   * The localized, friendly version of the resource provider name.
   */
  provider?: string;
  /**
   * The localized, friendly version of the resource type related to this action or operation; the
   * resource type should match the public documentation for the resource provider.
   */
  resource?: string;
  /**
   * The localized, friendly name for the operation. Use the name as it will displayed to the user.
   */
  operation?: string;
  /**
   * The localized, friendly description for the operation. The description will be displayed to
   * the user. It should be thorough and concise for used in both tooltips and detailed views.
   */
  description?: string;
}

/**
 * Describes the supported REST operation.
 */
export interface Operation {
  /**
   * The name of the operation being performed on this particular object.
   */
  name?: string;
  /**
   * Contains the localized display information for this particular operation or action.
   */
  display?: Display;
  /**
   * The intended executor of the operation.
   */
  origin?: string;
}

/**
 * The details of the error.
 */
export interface ErrorDetails {
  /**
   * Error code.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly code?: string;
  /**
   * Error message indicating why the operation failed.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly message?: string;
  /**
   * The target of the particular error.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly target?: string;
}

/**
 * Error response indicates that the service is not able to process the incoming request. The
 * reason is provided in the error message.
 */
export interface ErrorResponse {
  /**
   * The details of the error.
   */
  error?: ErrorDetails;
}

/**
 * OS disk image.
 */
export interface OsDiskImage {
  /**
   * OS operating system type. Possible values include: 'None', 'Windows', 'Linux'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly operatingSystem?: OperatingSystem;
  /**
   * SAS key for source blob.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly sourceBlobSasUri?: string;
}

/**
 * Data disk image.
 */
export interface DataDiskImage {
  /**
   * The LUN.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly lun?: number;
  /**
   * SAS key for source blob.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly sourceBlobSasUri?: string;
}

/**
 * Extended description about the product required for installing it into Azure Stack.
 */
export interface ExtendedProduct {
  /**
   * The URI to the .azpkg file that provides information required for showing product in the
   * gallery.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly galleryPackageBlobSasUri?: string;
  /**
   * Specifies the kind of the product (virtualMachine or virtualMachineExtension).
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly productKind?: string;
  /**
   * Specifies kind of compute role included in the package. Possible values include: 'None',
   * 'IaaS', 'PaaS'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly computeRole?: ComputeRole;
  /**
   * Specifies if product is a Virtual Machine Extension.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly isSystemExtension?: boolean;
  /**
   * The URI.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly uri?: string;
  /**
   * Indicates if specified product supports multiple extensions.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly supportMultipleExtensions?: boolean;
  /**
   * Specifies product version.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly version?: string;
  /**
   * Specifies operating system used by the product. Possible values include: 'None', 'Windows',
   * 'Linux'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly vmOsType?: OperatingSystem;
  /**
   * Indicates if virtual machine Scale Set is enabled in the specified product.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly vmScaleSetEnabled?: boolean;
  /**
   * OS disk image used by product.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly osDiskImage?: OsDiskImage;
  /**
   * List of attached data disks.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly dataDiskImages?: DataDiskImage[];
}

/**
 * Product information.
 */
export interface VirtualMachineExtensionProductProperties {
  /**
   * Specifies kind of compute role included in the package. Possible values include: 'None',
   * 'IaaS', 'PaaS'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly computeRole?: ComputeRole;
  /**
   * Specifies if product is a Virtual Machine Extension.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly isSystemExtension?: boolean;
  /**
   * The URI.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly uri?: string;
  /**
   * Indicates if specified product supports multiple extensions.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly supportMultipleExtensions?: boolean;
  /**
   * Specifies product version.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly version?: string;
  /**
   * Specifies operating system used by the product. Possible values include: 'None', 'Windows',
   * 'Linux'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly vmOsType?: OperatingSystem;
  /**
   * Indicates if virtual machine Scale Set is enabled in the specified product.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly vmScaleSetEnabled?: boolean;
}

/**
 * Product information.
 */
export interface VirtualMachineProductProperties {
  /**
   * Specifies product version.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly version?: string;
  /**
   * OS disk image used by product.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly osDiskImage?: OsDiskImage;
  /**
   * List of attached data disks.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly dataDiskImages?: DataDiskImage[];
}

/**
 * Links to product icons.
 */
export interface IconUris {
  /**
   * URI to large icon.
   */
  large?: string;
  /**
   * URI to wide icon.
   */
  wide?: string;
  /**
   * URI to medium icon.
   */
  medium?: string;
  /**
   * URI to small icon.
   */
  small?: string;
  /**
   * URI to hero icon.
   */
  hero?: string;
}

/**
 * Link with additional information about a product.
 */
export interface ProductLink {
  /**
   * The description of the link.
   */
  displayName?: string;
  /**
   * The URI corresponding to the link.
   */
  uri?: string;
}

/**
 * Additional properties of the product
 */
export interface ProductProperties {
  /**
   * The version.
   */
  version?: string;
}

/**
 * Product compatibility
 */
export interface Compatibility {
  /**
   * Tells if product is compatible with current device
   */
  isCompatible?: boolean;
  /**
   * Short error message if any compatibility issues are found
   */
  message?: string;
  /**
   * Full error message if any compatibility issues are found
   */
  description?: string;
  /**
   * List of all issues found
   */
  issues?: CompatibilityIssue[];
}

/**
 * Product information.
 */
export interface Product extends Resource {
  /**
   * The display name of the product.
   */
  displayName?: string;
  /**
   * The description of the product.
   */
  description?: string;
  /**
   * The user-friendly name of the product publisher.
   */
  publisherDisplayName?: string;
  /**
   * Publisher identifier.
   */
  publisherIdentifier?: string;
  /**
   * The offer representing the product.
   */
  offer?: string;
  /**
   * The version of the product offer.
   */
  offerVersion?: string;
  /**
   * The product SKU.
   */
  sku?: string;
  /**
   * The part number used for billing purposes.
   */
  billingPartNumber?: string;
  /**
   * The type of the Virtual Machine Extension.
   */
  vmExtensionType?: string;
  /**
   * The identifier of the gallery item corresponding to the product.
   */
  galleryItemIdentity?: string;
  /**
   * Additional links available for this product.
   */
  iconUris?: IconUris;
  /**
   * Additional links available for this product.
   */
  links?: ProductLink[];
  /**
   * The legal terms.
   */
  legalTerms?: string;
  /**
   * The privacy policy.
   */
  privacyPolicy?: string;
  /**
   * The length of product content.
   */
  payloadLength?: number;
  /**
   * The kind of the product (virtualMachine or virtualMachineExtension)
   */
  productKind?: string;
  /**
   * Additional properties for the product.
   */
  productProperties?: ProductProperties;
  /**
   * Product compatibility with current device.
   */
  compatibility?: Compatibility;
}

/**
 * Device Configuration.
 */
export interface DeviceConfiguration {
  /**
   * Version of the device.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly deviceVersion?: string;
  /**
   * Identity system of the device. Possible values include: 'AzureAD', 'ADFS'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly identitySystem?: Category;
}

/**
 * Update details for product log.
 */
export interface MarketplaceProductLogUpdate {
  /**
   * Operation to log.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly operation?: string;
  /**
   * Operation status to log.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly status?: string;
  /**
   * Error related to the operation.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly error?: string;
  /**
   * Error details related to operation.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly details?: string;
}

/**
 * Product action log.
 */
export interface ProductLog {
  /**
   * Log ID.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * Logged product ID.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly productId?: string;
  /**
   * Logged subscription ID.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly subscriptionId?: string;
  /**
   * Logged registration name.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly registrationName?: string;
  /**
   * Logged resource group name.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly resourceGroupName?: string;
  /**
   * Logged operation.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly operation?: string;
  /**
   * Operation start datetime.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly startDate?: string;
  /**
   * Operation end datetime.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly endDate?: string;
  /**
   * Operation status.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly status?: string;
  /**
   * Operation error data.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly error?: string;
  /**
   * Operation error details.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly details?: string;
}

/**
 * Registration information.
 */
export interface Registration extends TrackedResource {
  /**
   * The object identifier associated with the Azure Stack connecting to Azure.
   */
  objectId?: string;
  /**
   * The identifier of the registered Azure Stack.
   */
  cloudId?: string;
  /**
   * Specifies the billing mode for the Azure Stack registration.
   */
  billingModel?: string;
}

/**
 * The resource containing the Azure Stack activation key.
 */
export interface ActivationKeyResult {
  /**
   * Azure Stack activation key.
   */
  activationKey?: string;
}

/**
 * Registration resource
 */
export interface RegistrationParameter {
  /**
   * The token identifying registered Azure Stack
   */
  registrationToken: string;
  /**
   * Location of the resource. Possible values include: 'global'
   */
  location?: Location;
}

/**
 * Customer subscription.
 */
export interface CustomerSubscription extends Resource {
  /**
   * Tenant Id.
   */
  tenantId?: string;
}

/**
 * An interface representing AzureStackManagementClientOptions.
 */
export interface AzureStackManagementClientOptions extends AzureServiceClientOptions {
  baseUri?: string;
}

/**
 * @interface
 * List of Operations
 * @extends Array<Operation>
 */
export interface OperationList extends Array<Operation> {
  /**
   * URI to the next page of operations.
   */
  nextLink?: string;
}

/**
 * @interface
 * Pageable list of products.
 * @extends Array<Product>
 */
export interface ProductList extends Array<Product> {
  /**
   * URI to the next page.
   */
  nextLink?: string;
}

/**
 * @interface
 * Pageable list of registrations.
 * @extends Array<Registration>
 */
export interface RegistrationList extends Array<Registration> {
  /**
   * URI to the next page.
   */
  nextLink?: string;
}

/**
 * @interface
 * Pageable list of customer subscriptions.
 * @extends Array<CustomerSubscription>
 */
export interface CustomerSubscriptionList extends Array<CustomerSubscription> {
  /**
   * URI to the next page.
   */
  nextLink?: string;
}

/**
 * Defines values for ProvisioningState.
 * Possible values include: 'Creating', 'Failed', 'Succeeded', 'Canceled'
 * @readonly
 * @enum {string}
 */
export type ProvisioningState = 'Creating' | 'Failed' | 'Succeeded' | 'Canceled';

/**
 * Defines values for ComputeRole.
 * Possible values include: 'None', 'IaaS', 'PaaS'
 * @readonly
 * @enum {string}
 */
export type ComputeRole = 'None' | 'IaaS' | 'PaaS';

/**
 * Defines values for OperatingSystem.
 * Possible values include: 'None', 'Windows', 'Linux'
 * @readonly
 * @enum {string}
 */
export type OperatingSystem = 'None' | 'Windows' | 'Linux';

/**
 * Defines values for CompatibilityIssue.
 * Possible values include: 'HigherDeviceVersionRequired', 'LowerDeviceVersionRequired',
 * 'CapacityBillingModelRequired', 'PayAsYouGoBillingModelRequired',
 * 'DevelopmentBillingModelRequired', 'AzureADIdentitySystemRequired',
 * 'ADFSIdentitySystemRequired', 'ConnectionToInternetRequired', 'ConnectionToAzureRequired',
 * 'DisconnectedEnvironmentRequired'
 * @readonly
 * @enum {string}
 */
export type CompatibilityIssue = 'HigherDeviceVersionRequired' | 'LowerDeviceVersionRequired' | 'CapacityBillingModelRequired' | 'PayAsYouGoBillingModelRequired' | 'DevelopmentBillingModelRequired' | 'AzureADIdentitySystemRequired' | 'ADFSIdentitySystemRequired' | 'ConnectionToInternetRequired' | 'ConnectionToAzureRequired' | 'DisconnectedEnvironmentRequired';

/**
 * Defines values for Category.
 * Possible values include: 'AzureAD', 'ADFS'
 * @readonly
 * @enum {string}
 */
export type Category = 'AzureAD' | 'ADFS';

/**
 * Defines values for Location.
 * Possible values include: 'global'
 * @readonly
 * @enum {string}
 */
export type Location = 'global';

/**
 * Contains response data for the list operation.
 */
export type OperationsListResponse = OperationList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationList;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type OperationsListNextResponse = OperationList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationList;
    };
};

/**
 * Contains response data for the list operation.
 */
export type ProductsListResponse = ProductList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProductList;
    };
};

/**
 * Contains response data for the get operation.
 */
export type ProductsGetResponse = Product & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Product;
    };
};

/**
 * Contains response data for the listDetails operation.
 */
export type ProductsListDetailsResponse = ExtendedProduct & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ExtendedProduct;
    };
};

/**
 * Contains response data for the getProducts operation.
 */
export type ProductsGetProductsResponse = ProductList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProductList;
    };
};

/**
 * Contains response data for the getProduct operation.
 */
export type ProductsGetProductResponse = Product & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Product;
    };
};

/**
 * Contains response data for the uploadLog operation.
 */
export type ProductsUploadLogResponse = ProductLog & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProductLog;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type ProductsListNextResponse = ProductList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProductList;
    };
};

/**
 * Contains response data for the list operation.
 */
export type RegistrationsListResponse = RegistrationList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RegistrationList;
    };
};

/**
 * Contains response data for the get operation.
 */
export type RegistrationsGetResponse = Registration & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Registration;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type RegistrationsCreateOrUpdateResponse = Registration & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Registration;
    };
};

/**
 * Contains response data for the update operation.
 */
export type RegistrationsUpdateResponse = Registration & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Registration;
    };
};

/**
 * Contains response data for the getActivationKey operation.
 */
export type RegistrationsGetActivationKeyResponse = ActivationKeyResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ActivationKeyResult;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type RegistrationsListNextResponse = RegistrationList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RegistrationList;
    };
};

/**
 * Contains response data for the list operation.
 */
export type CustomerSubscriptionsListResponse = CustomerSubscriptionList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: CustomerSubscriptionList;
    };
};

/**
 * Contains response data for the get operation.
 */
export type CustomerSubscriptionsGetResponse = CustomerSubscription & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: CustomerSubscription;
    };
};

/**
 * Contains response data for the create operation.
 */
export type CustomerSubscriptionsCreateResponse = CustomerSubscription & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: CustomerSubscription;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type CustomerSubscriptionsListNextResponse = CustomerSubscriptionList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: CustomerSubscriptionList;
    };
};
