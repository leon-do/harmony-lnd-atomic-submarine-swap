btcd --testnet --rpcuser=REPLACEME --rpcpass=REPLACEME

lnd --bitcoin.active --bitcoin.testnet --debuglevel=debug --btcd.rpcuser=REPLACEME --btcd.rpcpass=REPLACEME --rpclisten=0.0.0:10009 --nat

lncli -n testnet create

lncli -n testnet unlock