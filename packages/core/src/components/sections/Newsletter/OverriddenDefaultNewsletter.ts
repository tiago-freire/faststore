import { override } from 'src/customizations/src/components/overrides/Newsletter'
import { getOverriddenSection } from 'src/sdk/overrides/getOverriddenSection'
import type { SectionOverrideDefinition } from 'src/typings/overridesDefinition'

/**
 * This component exists to support overrides 1.0
 *
 * This allows users to override the default Newsletter section present in the Headless CMS
 */
export const OverriddenDefaultNewsletter = getOverriddenSection(
  override as SectionOverrideDefinition<'Newsletter'>
)