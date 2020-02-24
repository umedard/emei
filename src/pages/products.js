import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Highlighted from "../components/highlighted"
import PageWrapper from "../components/pageWrapper"
import ProductSection from '../components/productSection'

import BulkMoldingCompounds from "../components/products/BulkMoldingCompounds"
import EMIShieldingMaterials from "../components/products/EMIShieldingMaterials"
import InductiveComponents from "../components/products/InductiveComponents"
import PolymerAdhesiveMaterials from "../components/products/PolymerAdhesiveMaterials"
import ThermalManagementMaterials from "../components/products/ThermalManagementMaterials"

export default function Products() {
  return (
    <Layout>
      <SEO title="Products" />
      <Highlighted text="Products" imgUrl="/images/electornics.jpeg" url="/products" />
      <PageWrapper>
          <ProductSection title="Bulk Molding Compounds" productComponent={<BulkMoldingCompounds/>}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet cursus dui quis vehicula. Donec hendrerit sapien tortor, vel pulvinar neque convallis a. Etiam luctus elementum magna quis rhoncus. Quisque vitae erat dignissim, imperdiet velit vel, elementum lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            
          </ProductSection>
          <ProductSection title="EMI Shielding Materials" productComponent={<EMIShieldingMaterials/>}>
            Curabitur aliquet cursus dui quis vehicula. Donec hendrerit sapien tortor, vel pulvinar neque convallis a. Etiam luctus elementum magna quis rhoncus. Quisque vitae erat dignissim, imperdiet velit vel, elementum lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            
          </ProductSection>
          <ProductSection title="Inductive Components" productComponent={<InductiveComponents/>}>
            Amet, consectetur adipiscing elit. Curabitur aliquet cursus dui quis vehicula. Donec hendrerit sapien tortor, vel pulvinar neque convallis a. Etiam luctus elementum magna quis rhoncus. Quisque vitae erat dignissim, imperdiet velit vel, elementum lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            
          </ProductSection>
          <ProductSection title="Polymer Adhesive Materials" productComponent={<PolymerAdhesiveMaterials/>}>
            Dolor sit amet, consectetur adipiscing elit. Curabitur aliquet cursus dui quis vehicula. Donec hendrerit sapien tortor, vel pulvinar neque convallis a. Etiam luctus elementum magna quis rhoncus. Quisque vitae erat dignissim, imperdiet velit vel, elementum lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            
          </ProductSection>
          <ProductSection title="Thermal Management Materials" productComponent={<ThermalManagementMaterials/>}>
            Adipiscing elit. Curabitur aliquet cursus dui quis vehicula. Donec hendrerit sapien tortor, vel pulvinar neque convallis a. Etiam luctus elementum magna quis rhoncus. Quisque vitae erat dignissim, imperdiet velit vel, elementum lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            
          </ProductSection>       
      </PageWrapper>
    </Layout>
  )
}






