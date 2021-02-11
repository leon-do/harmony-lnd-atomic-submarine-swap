# Submarine Swaps Between BTC Lightning and Harmony ONE

<a href="https://www.youtube.com/watch?v=3ZFBG7Z2puU">
<img src="https://user-images.githubusercontent.com/19412160/107597893-142dd780-6bea-11eb-87cc-04c64ed9d9f6.png"/>
</a>

## Install lnd and btcd

`btcd --testnet --rpcuser=REPLACEME --rpcpass=REPLACEME`

`lnd --bitcoin.active --bitcoin.testnet --debuglevel=debug --btcd.rpcuser=REPLACEME --btcd.rpcpass=REPLACEME --rpclisten=0.0.0.0:10009`

`lncli -n testnet create`

`lncli -n testnet unlock`

## Open channel

`031c612cd69fa72af27ad7dfdb19e41e6afd0fb2645a04df286fe5fcca4e901833@161.35.99.8:9735`

## Request swap

![](https://user-images.githubusercontent.com/19412160/107597088-a1bbf800-6be7-11eb-959d-6ac862a6fe4d.png)

## Verify transaction amount

![](https://user-images.githubusercontent.com/19412160/107597172-de87ef00-6be7-11eb-9a0f-a32bd4cd4e26.png)

## Parse invoice to verify toAddress

![](https://user-images.githubusercontent.com/19412160/107597225-05debc00-6be8-11eb-832e-a407466980ae.png)

## Call getOrder function with payment hash to verify on chain

![](https://user-images.githubusercontent.com/19412160/107597281-2e66b600-6be8-11eb-9c00-3e1fe7b3a18c.png)

## Once verified, pay invoice

![](https://user-images.githubusercontent.com/19412160/107597420-93221080-6be8-11eb-9220-e0c9818c9d4a.png)

## Check Harmony Wallet for updated balance

![](https://user-images.githubusercontent.com/19412160/107597469-b64cc000-6be8-11eb-88d7-49f74d630908.png)

## On-chain balance should be zero

![](https://user-images.githubusercontent.com/19412160/107597513-d67c7f00-6be8-11eb-8d9a-c7787305e773.png)
