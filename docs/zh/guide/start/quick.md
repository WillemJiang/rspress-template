# 快速入门

## 概述

只需要5分钟就能运行该软件的操作指导。


```py
# zero model code change
from <HuggingFace> import <ModelCls>, <ModelArgs>

# create fake model without actual memory usage (optional)
fake_model = deferred_init(<ModelCls>, <ModelArgs>)

# initialize 4D device mesh
mesh = init_device_mesh("cuda", (dp_zero_size, tp_sp_size), mesh_dim_names=["DP_ZERO", "TP_SP"])

# parallelize model in tp & sp
from <PredefinedPlan> import sharding_plan
real_tp_sp_model = parallelize_module(fake_model, mesh["TP_SP"], sharding_plan)

# parallelize model in dp
ddp_model = DDP(real_tp_sp_model, mesh["DP_ZERO"])

# parallelize model with zero2
doptimizer = DistributedOptimizer(torch.optim.AdamW, models=[ddp_model])

# train model as if on a single device
for x in range(dataset):
    loss = ddp_model(x)
    loss.backward()
    doptimizer.step()
    doptimizer.zero_grad()
```

More examples can be found in: `<repo>/python/example/`.