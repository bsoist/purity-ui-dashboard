// Chakra imports
import { Box, Flex, Grid, Icon } from "@chakra-ui/react";
// Assets
import BackgroundCard1 from "assets/img/BackgroundCard1.png";
import { MastercardIcon, VisaIcon } from "components/Icons/Icons";
import React from "react";
import { FaPaypal, FaWallet, FaUserAlt, FaUsers } from "react-icons/fa";
import { RiMastercardFill } from "react-icons/ri";
import {
  billingData,
  invoicesData,
  newestTransactions,
  olderTransactions,
} from "variables/general";
import BillingInformation from "./components/BillingInformation";
import CreditCard from "./components/CreditCard";
import Invoices from "./components/Invoices";
import PaymentMethod from "./components/PaymentMethod";
import PaymentStatistics from "./components/PaymentStatistics";
import Transactions from "./components/Transactions";

function Billing() {
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <Grid templateColumns={{ sm: "1fr", lg: "2fr 1.2fr" }} templateRows='1fr'>
        <Box>
          <Grid
            templateColumns={{
              sm: "1fr",
              md: "1fr 1fr",
              xl: "1fr 1fr 1fr 1fr",
            }}
            templateRows={{ sm: "auto auto auto", md: "1fr auto", xl: "1fr" }}
            gap='26px'>
            <CreditCard
              backgroundImage={BackgroundCard1}
              title={"PNC Mastercard"}
              number={"5412 2139 0823 XXXX"}
              validity={{
                name: "VALID THRU",
                data: "05/24",
              }}
              cvv={{
                name: "CVV",
                code: "09x",
              }}
              icon={
                <Icon
                  as={RiMastercardFill}
                  w='48px'
                  h='auto'
                  color='gray.400'
                />
              }
            />
            <PaymentStatistics
              icon={<Icon h={"24px"} w={"24px"} color='white' as={FaUserAlt} />}
              title={"You"}
              description={"Your activity"}
              amount={20.00}
            />
            <PaymentStatistics
              icon={<Icon h={"24px"} w={"24px"} color='white' as={FaUsers} />}
              title={"Your Club"}
              description={"Total club activity"}
              amount={45.50}
            />
          </Grid>
          <PaymentMethod
            title={"Payment Methods"}
            mastercard={{
              icon: <MastercardIcon w='100%' h='100%' />,
              number: "5412 2139 0823 XXXX",
            }}
            visa={{
              icon: <VisaIcon w='100%' h='100%' />,
              number: "4212 2139 0823 XXXX",
            }}
          />
        </Box>
        <Invoices title={"Prices"} data={invoicesData} />
      </Grid>
      <Grid templateColumns={{ sm: "1fr", lg: "1.6fr 1.2fr" }}>
        <BillingInformation title={"Billing Information"} data={billingData} />
        <Transactions
          title={"Your Transactions"}
          date={"23 - 30 September"}
          newestTransactions={newestTransactions}
          olderTransactions={olderTransactions}
        />
      </Grid>
    </Flex>
  );
}

export default Billing;
